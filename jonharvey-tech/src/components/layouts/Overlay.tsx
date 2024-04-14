import React, { ReactNode, CSSProperties } from 'react';
import styles from './Overlay.module.css';

export type OverlayProps = {
    onClose: () => void;
    overlayStyle: CSSProperties;
    contentStyle: CSSProperties;
    children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = (props) => {
    return (
        <div className={styles.overlay} style={{...props.overlayStyle}} onClick={() => props.onClose()}>
            <div className={styles.content} style={{...props.contentStyle}} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default Overlay;