import React from "react";

export const Landing: React.FC = () => {
    return (
        <div className=" h-full">
            {/* Header Start*/}
            <div className="flex flex-row flex-wrap justify-between w-full bg-green-500 h-16 mb-8 py-4 px-6">
                <p>Logo + Home</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Docs</p>
                <p>Login</p>
            </div>
            {/* Header End*/}

            {/* Body Start*/}
            <div className="">Body</div>
            {/* Body End*/}
        </div>
    )
}