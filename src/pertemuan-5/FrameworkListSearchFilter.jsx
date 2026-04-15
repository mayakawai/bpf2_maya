import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const _selectedTag = dataForm.selectedTag.toLowerCase();

    const allTags = [...new Set(frameworkData.flatMap(item => item.tags))];

    const filteredFrameworks = frameworkData.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(_searchTerm);
        const matchTag =
            _selectedTag === "" ||
            item.tags.some(tag => tag.toLowerCase() === _selectedTag);

        return matchSearch && matchTag;
    });

    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={handleChange}
            />
            
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {filteredFrameworks.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>

                    <p className="text-sm text-gray-700 mt-1">
                        Developed by: <strong>{item.details.developer}</strong> ({item.details.releaseYear})
                    </p>

                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}