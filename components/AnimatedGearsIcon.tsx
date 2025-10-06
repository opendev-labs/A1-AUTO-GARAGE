import React, { useRef, useEffect } from 'react';

/**
 * Generates the SVG path data for a spur gear with a more realistic tooth profile.
 * The geometry is based on standard gear principles to allow for proper meshing.
 * @param cx - The center x-coordinate.
 * @param cy - The center y-coordinate.
 * @param teeth - The number of teeth.
 * @param outerRadius - The radius to the tip of the teeth (addendum).
 * @param rootRadius - The radius to the base of the teeth (dedendum).
 * @param holeRadius - The radius of the central hole.
 * @param twist - An initial rotation offset in radians, useful for meshing gears.
 * @returns The 'd' attribute string for an SVG <path> element.
 */
const generateSpurGearPath = (
  cx: number,
  cy: number,
  teeth: number,
  outerRadius: number,
  rootRadius: number,
  holeRadius: number,
  twist: number = 0
): string => {
  const path: string[] = [];
  const sectionAngle = (2 * Math.PI) / teeth; // The angle covered by one tooth and one gap
  // NOTE: Adjusted from 0.5 to 0.6 to make teeth wider for a "bolder" look.
  const toothToSectionRatio = 0.6;
  const toothAngle = sectionAngle * toothToSectionRatio;
  const gapAngle = sectionAngle * (1 - toothToSectionRatio);
  
  // A slight taper to the tooth for a more realistic look
  const taperAngle = toothAngle * 0.15;

  for (let i = 0; i < teeth; i++) {
    const startAngle = i * sectionAngle + twist;

    // Point 1: Start of the tooth base (leaving the previous gap)
    const p1Angle = startAngle + gapAngle / 2;
    const p1x = cx + rootRadius * Math.cos(p1Angle);
    const p1y = cy + rootRadius * Math.sin(p1Angle);

    // Point 2: Start of the tooth tip
    const p2Angle = p1Angle + taperAngle;
    const p2x = cx + outerRadius * Math.cos(p2Angle);
    const p2y = cy + outerRadius * Math.sin(p2Angle);
    
    // Point 3: End of the tooth tip
    const p3Angle = p2Angle + (toothAngle - 2 * taperAngle);
    const p3x = cx + outerRadius * Math.cos(p3Angle);
    const p3y = cy + outerRadius * Math.sin(p3Angle);

    // Point 4: End of the tooth base
    const p4Angle = p1Angle + toothAngle;
    const p4x = cx + rootRadius * Math.cos(p4Angle);
    const p4y = cy + rootRadius * Math.sin(p4Angle);

    if (i === 0) {
      path.push(`M ${p1x.toFixed(3)} ${p1y.toFixed(3)}`);
    } else {
      // Draw an arc along the root circle to form the gap
      path.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${p1x.toFixed(3)} ${p1y.toFixed(3)}`);
    }

    // Draw the straight flank of the tooth, the tip, and the other flank
    path.push(`L ${p2x.toFixed(3)} ${p2y.toFixed(3)}`);
    path.push(`A ${outerRadius} ${outerRadius} 0 0 1 ${p3x.toFixed(3)} ${p3y.toFixed(3)}`);
    path.push(`L ${p4x.toFixed(3)} ${p4y.toFixed(3)}`);
  }
  
  // Close the final gap by drawing an arc back to the start
  const firstPointAngle = twist + gapAngle / 2;
  path.push(`A ${rootRadius} ${rootRadius} 0 0 1 ${cx + rootRadius * Math.cos(firstPointAngle)} ${cy + rootRadius * Math.sin(firstPointAngle)} Z`);

  // Define the path for the center hole using the 'evenodd' fill rule to subtract it
  const holePath = `M ${cx + holeRadius} ${cy} A ${holeRadius} ${holeRadius} 0 1 0 ${cx - holeRadius} ${cy} A ${holeRadius} ${holeRadius} 0 1 0 ${cx + holeRadius} ${cy} Z`;

  return `${path.join(' ')} ${holePath}`;
};

const AnimatedGearsIcon: React.FC = () => {
  const gear1Ref = useRef<SVGPathElement>(null);
  const gear2Ref = useRef<SVGPathElement>(null);

  // --- Gear Engineering Parameters ---
  // The 'module' is a fundamental unit in gear design. For two gears to mesh,
  // they MUST have the same module. Module = PitchDiameter / NumberOfTeeth.
  const module = 3;

  // -- Gear 1 (Larger, driving gear) --
  const gear1Params = {
    teeth: 10,
    cx: 18,
    cy: 18,
    pitchRadius: 5 * module, // 15
    // NOTE: Addendum/Dedendum reduced for shorter, bolder teeth.
    outerRadius: (5 + 0.8) * module, // 17.4
    rootRadius: (5 - 1.0) * module,  // 12
    holeRadius: 2 * module, // 6
  };

  // -- Gear 2 (Smaller, driven gear) --
  const gear2Params = (() => {
    const pitchRadius = 4 * module; // 12
    const centerDistance = gear1Params.pitchRadius + pitchRadius; // 15 + 12 = 27
    return {
      teeth: 8,
      centerDistance,
      pitchRadius,
      // NOTE: Addendum/Dedendum reduced for shorter, bolder teeth.
      outerRadius: (4 + 0.8) * module, // 14.4
      rootRadius: (4 - 1.0) * module,  // 9
      holeRadius: 1.5 * module, // 4.5
      // Position gear 2 relative to gear 1
      cx: gear1Params.cx + centerDistance,
      cy: gear1Params.cy,
    };
  })();

  // For perfect meshing, the second gear must be rotated by half of its tooth+gap angle.
  const gear2InitialTwist = Math.PI / gear2Params.teeth;

  // -- Rotational Dynamics --
  // The speed ratio is inversely proportional to the tooth count ratio.
  const rotationRatio = gear1Params.teeth / gear2Params.teeth; // 10 / 8 = 1.25

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const baseRotation = scrollY * 0.1;

      if (gear1Ref.current) {
        gear1Ref.current.style.transform = `rotate(${baseRotation}deg)`;
      }
      if (gear2Ref.current) {
        // Rotate in the opposite direction, multiplied by the gear ratio.
        gear2Ref.current.style.transform = `rotate(-${baseRotation * rotationRatio}deg)`;
      }
    };
    
    const onScroll = () => window.requestAnimationFrame(handleScroll);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [rotationRatio]);

  return (
    <svg width="60" height="40" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="text-primary-dark dark:text-primary-light overflow-visible">
      <g>
        <path
          ref={gear2Ref}
          d={generateSpurGearPath(gear2Params.cx, gear2Params.cy, gear2Params.teeth, gear2Params.outerRadius, gear2Params.rootRadius, gear2Params.holeRadius, gear2InitialTwist)}
          className="text-accent dark:text-accent-light"
          fill="currentColor"
          fillRule="evenodd"
          style={{ transformOrigin: `${gear2Params.cx}px ${gear2Params.cy}px`, transition: 'transform 50ms linear' }}
        />
        <path
          ref={gear1Ref}
          d={generateSpurGearPath(gear1Params.cx, gear1Params.cy, gear1Params.teeth, gear1Params.outerRadius, gear1Params.rootRadius, gear1Params.holeRadius)}
          fill="currentColor"
          fillRule="evenodd"
          style={{ transformOrigin: `${gear1Params.cx}px ${gear1Params.cy}px`, transition: 'transform 50ms linear' }}
        />
      </g>
    </svg>
  );
};

export default AnimatedGearsIcon;
