import React from "react";
import PropTypes from 'prop-types';
import Badge from "./ui/badge";
import ProgressBar from "./ui/progressBar";
//import { useHistory } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Accordion = ( { currentUser } ) => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.tagName);
        if (e.target.tagName === "BUTTON") {
            const accordionButton = e.target;
            const accordionDiv = e.target
                .closest(".accordion-item")
                .querySelector(".accordion-collapse");
            accordionButton.classList.toggle("show");
            accordionButton.classList.toggle("collapse");
            accordionButton.classList.toggle("collapsed");
            e.target.ariaExpanded = !e.target.ariaExpanded;
            accordionDiv.classList.toggle("show");
        }
    };

    return (
        <>
        <div
                        className="accordion"
                        id="accordionExample"
                        onClick={handleClick}
                    >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapse show"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Краткие сведения об участнике
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>{currentUser.userName}</strong>
                                    <br />
                                    {" " + currentUser.cardContent + ". "}
                                    <br />
                                    {"Возраст участника(лет): "}
                                    <strong>{currentUser.age}</strong>
                                    {"."}
                                    <br />
                                    {"Компетенции участника: "}
                                    <br/>
                                    <Badge
                                        content={currentUser.knowledge}
                                        color={currentUser.color}
                                        type="rounded"
                                    />
                                    {currentUser.isTeamLead && (
                                        <code>Является тимлидером команды</code>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Текущий статус
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <Badge
                                        content={currentUser.status}
                                        color="info text-dark"
                                        type="square"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Уровень знания языков
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>Владение JavaScript:</strong>
                                    <br />
                                    <ProgressBar
                                        progress={Number(
                                            currentUser.sinceJavascript
                                        )}
                                        color="info"
                                        type="strip"
                                    />
                                    <strong>Владение React:</strong>
                                    <br />
                                    <ProgressBar
                                        progress={Number(
                                            currentUser.sinceReact
                                        )}
                                        color="success"
                                        type="strip"
                                    />
                                    <strong>Владение MongoDB:</strong>
                                    <br />
                                    <ProgressBar
                                        progress={Number(currentUser.sinceDb)}
                                        color="warning"
                                        type="circle"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Социальные сети
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <Badge
                                        content={currentUser.social}
                                        color="danger"
                                        type="square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

Accordion.propTypes = {
    currentUser: PropTypes.object
}

export default Accordion;
