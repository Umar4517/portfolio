import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import {
    FaReact, FaJsSquare, FaAws, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt,
    FaSass, FaPhp, FaLaravel, FaDocker
  } from 'react-icons/fa';
  import {
    SiTypescript, SiAngular, SiMongodb, SiGraphql, SiKubernetes, SiRedis, SiPostgresql, SiFirebase
  } from 'react-icons/si';
 

const SkillIcons = () => {
  const sphereRadius = 2;
  const icons = [
    // Add your icons here
    { icon: <FaReact />, label: 'React' },
    { icon: <FaJsSquare />, label: 'JavaScript' },
    { icon: <FaAws />, label: 'AWS' },
    { icon: <FaNodeJs />, label: 'Node.js' },
    { icon: <SiTypescript />, label: 'TypeScript' },
    { icon: <SiAngular />, label: 'Angular' },
    { icon: <FaPython />, label: 'Python' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <FaHtml5 />, label: 'HTML5' },
    { icon: <FaCss3Alt />, label: 'CSS3' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiGraphql />, label: 'GraphQL' },
    { icon: <FaDocker />, label: 'Docker' },
    { icon: <SiKubernetes />, label: 'Kubernetes' },
    { icon: <SiRedis />, label: 'Redis' },
    { icon: <SiPostgresql />, label: 'PostgreSQL' },
    { icon: <FaSass />, label: 'Sass' },
    { icon: <FaPhp />, label: 'PHP' },
    { icon: <FaLaravel />, label: 'Laravel' },
    { icon: <SiFirebase />, label: 'Firebase' }
  ];

  const iconPositions = icons.map((_, index) => {
    const phi = Math.acos(-1 + (2 * index) / icons.length);
    const theta = Math.sqrt(icons.length * Math.PI) * phi;
    return [
      sphereRadius * Math.sin(phi) * Math.cos(theta),
      sphereRadius * Math.sin(phi) * Math.sin(theta),
      sphereRadius * Math.cos(phi),
    ];
  });

  return (
    

    <div className="canvas-container">
          
      <Canvas style={{ width: '100%', height: '100%' }}>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1.5} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        {icons.map((item, index) => (
          <mesh position={iconPositions[index]} key={index}>
            <Html>
              <div className="icon-container">
                {item.icon}
              </div>
            </Html>
          </mesh>
        ))}
      </Canvas>
      
    </div>
  );
};

export default SkillIcons;
