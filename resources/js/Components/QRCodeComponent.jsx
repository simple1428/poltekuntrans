import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeComponent = ({
    value,
    size = 200,
    bgColor = "#ffffff",
    fgColor = "#000000",
    level = "Q",
    includeMargin = false,
}) => {
    return (
        <QRCodeSVG
            value={value}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            includeMargin={includeMargin}
        />
    );
};

export default QRCodeComponent;
