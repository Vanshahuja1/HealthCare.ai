import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Input1 = ({ setResult }) => {
    const [formData, setFormData] = useState({}); // State to hold the form data
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch('/api/liver', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            function jsonConcat(o1, o2) {
                for (var key in o2) {
                    o1[key] = o2[key];
                }
                return o1;
            }

            var output = {};
            output = jsonConcat(output, data);
            output = jsonConcat(output, formData);
            output = jsonConcat(output, { disease: 'liver' });
            setResult(output);
        } catch (error) {
            console.error('Error:', error);
        }
        navigate('/result');
    };

    return (
        <div className="h-screen bg-gradient-to-t from-blue-900 via-blue-600 to-blue-200 flex items-center justify-center px-6 py-12">
            <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl p-8">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
                    Liver Disease Diagnosis
                </h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Field Components */}
                    {[
                        { label: 'Age of the Patient', name: 'Age', type: 'number', min: 0, max: 150 },
                        { label: 'Total Bilirubin', name: 'Total_Bilirubin', type: 'text' },
                        { label: 'Direct Bilirubin', name: 'Direct_Bilirubin', type: 'text' },
                        { label: 'Alkphos Alkaline Phosphotase', name: 'AAP', type: 'text' },
                        { label: 'Sgpt Alamine Aminotransferase', name: 'SAA_1', type: 'text' },
                        { label: 'Sgot Aspartate Aminotransferase', name: 'SAA_2', type: 'text' },
                        { label: 'Total Proteins', name: 'Total_Protein', type: 'text' },
                        { label: 'ALB Albumin', name: 'ALB_Albumin', type: 'text' },
                        { label: 'Albumin and Globulin Ratio [A/G RATIO]', name: 'AG_RATIO', type: 'text' },
                    ].map((field, index) => (
                        <div key={index} className="flex flex-col space-y-2">
                            <label className="text-lg font-medium text-gray-800">{field.label}</label>
                            <input
                                {...field}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    {/* Gender Field */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-lg font-medium text-gray-800">Gender of the Patient</label>
                        <select
                            name="Gender"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={handleChange}
                        >
                            <option value="none">None</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-full px-8 py-3 shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            Diagnose Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
