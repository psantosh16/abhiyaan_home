import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particalConfig from "../configs/partical-config";

const ParticalBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  // }, []);

  return (
    <Particles
      className="z-[-1] w-screen"
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={particalConfig}
    ></Particles>
  );
};

export default ParticalBackground;
