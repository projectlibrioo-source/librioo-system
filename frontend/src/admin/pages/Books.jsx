import React from 'react';
import { Search } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const Books = () => {
    // Mock Data
    const books = [
        { name: 'Harry Potter', author: 'Sandun', isbn: '9785542215150', status: 'Available', location: 'Shelf B3' },
        { name: 'Six Tales', author: 'Sulaksha', isbn: '9785542215150', status: 'Available', location: 'Shelf B4' },
        { name: '1984', author: 'Nimuthu', isbn: '9785542215150', status: 'Available', location: 'Shelf A3' },
        { name: 'Jane Eyre', author: 'Withara', isbn: '9785542215150', status: 'Available', location: 'Shelf C4' },
        { name: 'The Road', author: 'Tharana', isbn: '9785542215150', status: 'Available', location: 'Shelf D1' },
        { name: 'Ender\'s Game', author: 'Hasintha', isbn: '9785542215150', status: 'Available', location: 'Shelf B3' },
        { name: 'Educated', author: 'Dinuka', isbn: '9785542215150', status: 'Available', location: 'Shelf A5' },
        { name: 'Becoming', author: 'Daksitha', isbn: '9785542215150', status: 'Available', location: 'Shelf B2' },
    ];

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-3xl font-bold text-gray-900">Books</h2>

                    {/* Search Bar */}
                    <div className="relative flex w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm sm:w-96 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <select className="py-2 pl-3 pr-8 text-sm text-gray-700 border-r border-gray-300 border-none outline-none cursor-pointer bg-gray-50 focus:ring-0">
                            <option>Title</option>
                            <option>Author</option>
                            <option>ISBN</option>
                        </select>
                        <input
                            type="text"
                            className="block w-full py-2 pl-3 pr-10 leading-5 placeholder-gray-500 bg-transparent border-none focus:ring-0 focus:outline-none sm:text-sm"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Books Table */}
                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-50/50">
                                <tr>
                                    {['Book Name', 'Author', 'ISBN', 'Status', 'Location'].map((header) => (
                                        <th
                                            key={header}
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-900 uppercase border-r border-gray-200 last:border-r-0"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {books.map((book, idx) => (
                                    <tr key={idx} className="transition-colors hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {book.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {book.author}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {book.isbn}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {book.status}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            {book.location}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Books;
