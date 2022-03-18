import React from 'react';

function TailWindPosition(props) {
    return (
        <div
            className="bg-blue-100 grid grid-cols-3 grid-rows-3 place-items-center gap-4 font-mono text-gray-100 text-sm font-bold leading-6">
            {/*Pin to top left corner*/}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute left-0 top-0 h-16 w-16">01
                </div>
            </div>

            {/*Span top edge*/}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute inset-x-0 top-0 h-16">02
                </div>
            </div>

            {/* Pin to top right corner */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute top-0 right-0 h-16 w-16">03
                </div>
            </div>

            {/* Span left edge */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute inset-y-0 left-0 w-16">04
                </div>
            </div>

            {/* Fill entire parent */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute inset-0">05
                </div>
            </div>

            {/* Span right edge */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute inset-y-0 right-0 w-16">06
                </div>
            </div>

            {/* Pin to bottom left corner */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute bottom-0 left-0 h-16 w-16 ...">07
                </div>
            </div>

            {/* Span bottom edge */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute inset-x-0 bottom-0 h-16 ...">08
                </div>
            </div>

            {/* Pin to bottom right corner */}
            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-purple-300">
                <div
                    className="flex items-center justify-center bg-purple-500 shadow-lg rounded-lg absolute bottom-0 right-0 h-16 w-16">09
                </div>
            </div>
        </div>
    );
}

export default TailWindPosition;