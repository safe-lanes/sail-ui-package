import React from "react";
import clsx from "clsx";
import { StepConfig } from "./types";

interface Props {
    steps: StepConfig[];
    current: number;
    direction?: "vertical" | "horizontal";
    onStepClick?: (index: number) => void;
}

const Stepper: React.FC<Props> = ({
    steps,
    current,
    direction = "vertical",
    onStepClick,
}) => {
    const isVertical = direction === "vertical";

    return (
        <nav
            aria-label="Progress"
            className={clsx(
                "flex",
                isVertical ? "flex-col items-start space-y-6" : "flex-row items-start justify-between"
            )}
        >
            {steps.map((step, index) => {
                const isCurrentStep = index === current;
                const isCompleted = index < current;

                const handleClick = () => {
                    onStepClick?.(index);
                };

                const circleClasses = clsx(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 focus:outline-none relative z-10",
                    isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isCurrentStep
                            ? "border-blue-500 text-blue-600 bg-white"
                            : "border-gray-300 text-gray-500 bg-white"
                );

                return (
                    <div
                        key={index}
                        className={clsx(
                            "flex relative",
                            isVertical
                                ? "items-start"
                                : "flex-col items-center flex-1"
                        )}
                    >
                        {/* Step Circle */}
                        <div className={clsx(
                            "flex items-center",
                            isVertical ? "flex-col" : ""
                        )}>
                            <button
                                type="button"
                                onClick={handleClick}
                                className={circleClasses}
                                aria-current={isCurrentStep ? "step" : undefined}
                                aria-disabled={isCompleted ? false : !isCurrentStep ? false : undefined}
                                aria-label={`Step ${index + 1}: ${step.title}`}
                            >
                                {isCompleted ? (
                                    <svg
                                        width="16"
                                        height="12"
                                        viewBox="0 0 16 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            d="M1 6L5 10L15 1"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    index + 1
                                )}
                            </button>

                            {/* Vertical Connector Line */}
                            {isVertical && index < steps.length - 1 && (
                                <div
                                    className={clsx(
                                        "w-px mt-2",
                                        isCompleted && index + 1 <= current ? "bg-green-500" : "bg-gray-200"
                                    )}
                                    style={{ height: 40 }}
                                    aria-hidden="true"
                                />
                            )}
                        </div>

                        {/* Horizontal Connector Line */}
                        {!isVertical && index < steps.length - 1 && (
                            <div
                                className={clsx(
                                    "absolute top-5 h-px z-0",
                                    isCompleted && index + 1 <= current ? "bg-green-500" : "bg-gray-200"
                                )}
                                style={{
                                    left: '50%',
                                    right: '-50%',
                                    width: '100%'
                                }}
                                aria-hidden="true"
                            />
                        )}

                        {/* Labels */}
                        <div className={clsx(
                            isVertical ? "ml-4" : "mt-2 text-center"
                        )}>
                            <div className={clsx(
                                "text-sm font-medium",
                                isCurrentStep ? "text-blue-600" : "text-gray-700"
                            )}>
                                {step.title}
                            </div>
                            {step.description && (
                                <div className="text-xs text-gray-500 mt-1">{step.description}</div>
                            )}
                            <div className="text-xs mt-1">
                                {isCompleted && <span className="text-green-500">Completed</span>}
                                {!isCompleted && isCurrentStep && <span className="text-blue-500">In Progress</span>}
                                {!isCompleted && !isCurrentStep && <span className="text-gray-400">Pending</span>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </nav>
    );
};

export default Stepper;