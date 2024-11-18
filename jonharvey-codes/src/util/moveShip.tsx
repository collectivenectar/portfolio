import { useShipStore } from "@/providers/ShipStoreProvider";

type ShipParams = {
    start: number[];                // Starting [x, y] position
    destinations: number[][];       // List of [x, y] destination points
    weights: number[];              // List of weights for each destination
    scrollY: number;
    sceneScrollRange: number[];
    setPositionHook: (position: number[]) => void;
};

const moveShip = (params: ShipParams) => {

    const { start, destinations, weights, scrollY, sceneScrollRange, setPositionHook } = params;
    const [scrollStart, scrollEnd] = sceneScrollRange;

    const totalScrollLength = scrollEnd - scrollStart;

    // Calculate the scroll length for each segment based on weights
    const segmentLengths = weights.map(weight => (totalScrollLength * weight) / 100);

    // Calculate cumulative segment ends
    const segmentEnds = segmentLengths.reduce((acc, length) => {
        const lastEnd = acc.length > 0 ? acc[acc.length - 1] : scrollStart;
        acc.push(lastEnd + length);
        return acc;
    }, [] as number[]);

    // Determine the current segment index
    let segmentIndex = segmentEnds.findIndex(end => scrollY <= end);
    if (segmentIndex === -1) segmentIndex = destinations.length; // If not found, it means it's at the end

    // Calculate the start and end of the current segment
    const currentSegmentStart = segmentIndex === 0 ? scrollStart : segmentEnds[segmentIndex - 1];
    const currentSegmentEnd = segmentEnds[segmentIndex];

    // Normalize scroll position within the current segment
    const normalizedPosition = (scrollY - currentSegmentStart) / (currentSegmentEnd - currentSegmentStart);

    // Determine the start and end points for interpolation
    const startPoint = segmentIndex === 0 ? start : destinations[segmentIndex - 1];
    const endPoint = destinations[segmentIndex];

    const interpolatedX = lerp(startPoint[0], endPoint[0], normalizedPosition);
    const interpolatedY = lerp(startPoint[1], endPoint[1], normalizedPosition);
    setPositionHook([interpolatedX, interpolatedY]);
};

// Linear interpolation function
const lerp = (start: number, end: number, norm: number): number => {
    return (1 - norm) * start + norm * end;
};

export default moveShip;