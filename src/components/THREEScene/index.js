import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import GLTFLoader from "three-gltf-loader";
import OrbitControls from "three-orbitcontrols";
import { FBXLoader } from "./three.modules/FBXLoader";
import { OBJLoader } from "./three.modules/OBJLoader";

const THREEScene = props => {
  const mount = useRef();
  const [loadError, setLoadError] = useState({});

  const { id, starsRotationSpeed } = props;
  console.log("starsRotationSpeed: ", starsRotationSpeed);

  let camera,
    renderer,
    scene,
    controls,
    clock,
    frameId,
    mixer,
    starGeo,
    stars,
    cameraOriginalPos;

  useEffect(() => {
    if (mount.current) {
      threeSetup();
      start();
      // loadOBJ("models/fbx/phone.fbx");
      loadFBX("models/fbx/phone.fbx");
    }
    return () => {
      stop();
      mount.current && mount.current.removeChild(renderer.domElement);
    };
  }, [mount]);

  const onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer && renderer.setSize(width, height);
  };

  const threeSetup = () => {
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;

    const _setScene = () => {
      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0xa0a0a0);
      // scene.fog = new THREE.Fog(0xa0a0a0, 200, 1800);
    };

    const _setCamera = () => {
      const fov = 55;
      const aspect = width / height;
      const near = 45;
      const far = 30000;
      camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 500, 0);
      cameraOriginalPos = new THREE.Vector3(0, 100, 300);
    };

    const _setRenderer = () => {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.shadowMap.enabled = true;
      mount.current.appendChild(renderer.domElement);
    };

    const _setControls = () => {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 500;
      controls.maxDistance = 5500;
      controls.target.set(0, 450, 180);
      controls.update();
    };

    const _setLight = () => {
      let light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 200, 0);
      scene.add(light);
      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 2000, 100);
      light.castShadow = true;
      light.shadow.camera.top = 180;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.left = -120;
      light.shadow.camera.right = 120;
      scene.add(light);
    };

    const _setGround = () => {
      const mesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      // scene.add(mesh);
    };

    const _setGrid = () => {
      const grid = new THREE.GridHelper(2000, 200, 0x000000, 0x000000);
      grid.material.opacity = 0.5;
      grid.material.transparent = true;
      scene.add(grid);
    };

    const _setSkybox = () => {
      let materialArray = [];

      const src = "jpg/skybox/";
      const texture_ft = new THREE.TextureLoader().load(`${src}arid2_ft.jpg`);
      const texture_bk = new THREE.TextureLoader().load(`${src}arid2_bk.jpg`);
      const texture_up = new THREE.TextureLoader().load(`${src}arid2_up.jpg`);
      const texture_dn = new THREE.TextureLoader().load(`${src}arid2_dn.jpg`);
      const texture_rt = new THREE.TextureLoader().load(`${src}arid2_rt.jpg`);
      const texture_lf = new THREE.TextureLoader().load(`${src}arid2_lf.jpg`);

      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      materialArray.forEach((m, i) => (materialArray[i].side = THREE.BackSide));

      const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      const skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);
    };

    const _setSpaceWarp = () => {
      starGeo = new THREE.Geometry();

      for (let i = 0; i < 6000; i++) {
        const star = new THREE.Vector3(
          Math.random() * 6000 - 3000,
          Math.random() * 6000 - 3000,
          Math.random() * 6000 - 3000
        );
        star.velocity = 0;
        star.acceleration = 0.001;
        starGeo.vertices.push(star);
      }
      const sprite = new THREE.TextureLoader().load(
        "png/Particle Round With Glow.png"
      );
      const starMaterial = new THREE.PointsMaterial({
        color: 0xe6e6e6,
        size: Math.floor(Math.random() * Math.floor(40)) + 5,
        map: sprite,
        fog: false,
        transparent: true
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
    };

    _setScene();
    _setCamera();
    _setRenderer();
    _setControls();
    _setLight();
    _setGround();
    // _setGrid();
    // _setSkybox();
    _setSpaceWarp();

    clock = new THREE.Clock();

    window.addEventListener("resize", onWindowResize, false);
  };

  const start = () => {
    if (!frameId) {
      frameId = requestAnimationFrame(animate);
    }
  };

  const stop = () => {
    cancelAnimationFrame(frameId);
  };

  const animateStarsWarp = () => {
    starGeo.vertices.forEach(p => {
      // p.velocity += p.acceleration;
      // p.x -= p.velocity;
      // if (p.x < -1000) {
      //   p.x = 1000;
      //   p.velocity = 0;
      // }
    });
    starGeo.verticesNeedUpdate = true;
    stars.rotation.x += starsRotationSpeed;
  };

  const animate = () => {
    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(animate);

    console.log("starsRotationSpeed: ", starsRotationSpeed);
    animateStarsWarp();

    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    } else {
      controls.update();
    }
  };

  const toggleObject = ({ obj, show }) => {
    obj.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.visible = show;
      }
    });
  };

  const loadObjectByFileType = (source, fileType) => {
    if (!fileType) return;

    switch (fileType.toUpperCase()) {
      case "FBX":
        loadFBX(source);
        break;
      case "GLTF":
        loadGTLF(source);
        break;
      default:
        break;
    }
  };

  const loadFBX = source => {
    const onLoad = object => {
      object.name = `obj`;
      object.position.set(0, 0, 0);

      if (object.animations[0]) {
        mixer = new THREE.AnimationMixer(object);
        const action = mixer.clipAction(object.animations[0]);
        action.play();
      }

      object.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(object);
      setLoadError(false);
    };

    const onLoading = xhr => {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    };

    const onLoaderError = error => {
      console.error(error);
      setLoadError(error);
    };

    const loader = new FBXLoader();
    loader.load(source, onLoad, onLoading, onLoaderError);
  };

  const loadGTLF = source => {
    const loader = new GLTFLoader();
    loader.load(
      source,
      gltf => {
        const model = gltf.scene;

        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach(clip => {
          mixer.clipAction(clip).play();
        });

        scene.add(model);
      },
      xhr => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      error => {
        console.error("An error happened", error);
      }
    );
  };

  const loadOBJ = source => {
    const onLoad = object => {
      scene.add(object);
    };

    const onLoading = xhr => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    };

    const onError = error => {
      console.log("An error happened");
    };

    const loader = new OBJLoader();
    loader.load(source, onLoad, onLoading, onError);
  };

  const fitCameraToObject = (object, offset, controls) => {
    offset = offset || 1.5;

    const boundingBox = new THREE.Box3();

    // get bounding box of object - this will be used to setup controls and camera
    boundingBox.setFromObject(object);

    let center = new THREE.Vector3();
    center = boundingBox.getCenter(center);

    let size = new THREE.Vector3();
    size = boundingBox.getSize(size);

    // get the max side of the bounding box (fits to width OR height as needed )
    const maxDim = Math.max(size.x, size.y, size.z).toFixed(1);
    const max10percent = maxDim * 0.1;
    const minDim = Math.min(size.x, size.y, size.z).toFixed(1);
    const fov = (camera.fov * (Math.PI / 180)).toFixed(1);
    let cameraZ = maxDim / 2 / Math.tan(fov / 2);

    cameraZ *= offset; // zoom out a little so that objects don't fill the screen

    if (minDim < max10percent) {
      camera.position.y = camera.position.y + max10percent * 5;
    } else {
      camera.position.y = cameraOriginalPos.y;
    }

    scene.updateMatrixWorld(); //Update world positions
    const objectWorldPosition = new THREE.Vector3();
    objectWorldPosition.setFromMatrixPosition(object.matrixWorld);

    const directionVector = camera.position.sub(objectWorldPosition); //Get vector from camera to object
    const unitDirectionVector = directionVector.normalize(); // Convert to unit vector
    const cameraNewPos = unitDirectionVector.multiplyScalar(cameraZ); //Multiply unit vector times cameraZ distance
    camera.position.set(cameraNewPos.x, cameraNewPos.y, cameraNewPos.z);
    camera.lookAt(objectWorldPosition); //Look at object

    const minZ = boundingBox.min.z;
    const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

    camera.far = cameraToFarEdge * 3;
    camera.updateProjectionMatrix();

    if (controls) {
      // set camera to rotate around center of loaded object
      controls.target = center;

      // prevent camera from zooming out far enough to create far plane cutoff
      controls.maxDistance = cameraToFarEdge * 2;

      controls.saveState();
    } else {
      camera.lookAt(center);
    }
  };

  return <div id={id} ref={mount} className="fullscreen-canvas" />;
};

THREEScene.propTypes = {
  id: PropTypes.string,
  starsRotationSpeed: PropTypes.number,
};

THREEScene.defaultProps = {
  starsRotationSpeed: 0.0002,
};

export default THREEScene;
