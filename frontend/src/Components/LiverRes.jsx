import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Medication } from './Medication';

export const LiverRes = ({ result }) => {
    return (
        <>
            {/* Test Results Section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        {result?.result === 1 ? (
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-red-600">
                                Sorry, the report indicates a positive result. Please consult a healthcare professional.
                            </h1>
                        ) : (
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-green-500">
                                Great news! Your test results came back negative. Everything appears normal, and there's no cause for concern.
                            </h1>
                        )}
                        <Link
                            to="/liver"
                            className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                        >
                            Test Again
                        </Link>
                    </div>
                </div>
            </section>

            {/* Medication Section */}
            {result?.treat?.length > 0 && (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                            Recommended Medications
                        </h1>
                        <div className="flex flex-wrap -m-4">
                            {result.treat.map((medication, index) => (
                                <Medication key={index} content={medication} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

// PropTypes for validation
LiverRes.propTypes = {
    result: PropTypes.shape({
        result: PropTypes.number.isRequired,
        treat: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
