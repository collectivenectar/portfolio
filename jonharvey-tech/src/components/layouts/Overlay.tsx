import React, { ReactNode, CSSProperties, useState, useEffect, useRef } from 'react';
import styles from './Overlay.module.css';

export type OverlayProps = {
    onClose: () => void;
    overLayStyle: CSSProperties;
    contentStyle: CSSProperties;
    children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = (props : OverlayProps) => {
    const { onClose } = props;
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const startOutsideRef = useRef<boolean>(false);

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (contentRef.current) {
                startOutsideRef.current = !contentRef.current.contains(event.target as Node);
            }
        };

        const handleMouseUp = (event: MouseEvent) => {
            if (contentRef.current && startOutsideRef.current && !contentRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [onClose]);

    return (
        <div ref={overlayRef} className={styles.overlay} style={props.overLayStyle}>
            <div ref={contentRef} className={styles.content} style={props.contentStyle}>
                {props.children}
            </div>
        </div>
    );
};
export default Overlay;