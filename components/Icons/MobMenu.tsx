import React from "react";

interface IIcon {
    onClick?: () => void;
}

const MobMenu = ({ onClick }: IIcon) => {
    return (
        <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export default MobMenu;
