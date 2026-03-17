import React from 'react';
import { Bot, User, BookOpen, Settings } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const ActivityLogs = () => {
    const logs = [
        {
            date: 'Nov/3/2024', events: [
                { time: '10:15:22', icon: Bot, message: 'Robot connected to Wi-Fi and is online', type: 'system' },
                { time: '10:17:40', icon: BookOpen, message: 'Book search request created: "Data Structures"', type: 'search' },
                { time: '10:18:02', icon: User, message: 'Member logged in: M-0241', type: 'user' },
                { time: '10:18:45', icon: BookOpen, message: 'Book borrowed: "Data Structures - 3rd Edition"', type: 'borrow' },
            ]
        },
        {
            date: 'Nov/4/2024', events: [
                { time: '09:31:10', icon: User, message: 'User selected book category: Computer Science', type: 'user' },
                { time: '09:32:44', icon: Bot, message: 'Command sent to robot: Navigate to Shelf C-12', type: 'command' },
                { time: '09:33:01', icon: Bot, message: 'Robot started path following (Line Tracking Mode)', type: 'robot' },
                { time: '09:33:58', icon: Bot, message: 'Robot arrived at Shelf C-12', type: 'robot' },
                { time: '09:34:10', icon: Settings, message: 'Robot status updated: Task Completed', type: 'system' },
                { time: '10:15:20', icon: BookOpen, message: 'Book returned: "Operating Systems Concepts"', type: 'return' },
                { time: '11:02:14', icon: User, message: 'New guest browsing session started', type: 'user' },
                { time: '11:15:40', icon: Settings, message: 'Admin updated book availability: 12 items restocked', type: 'admin' },
                { time: '11:45:22', icon: Settings, message: 'System auto-backup completed', type: 'system' },
            ]
        },
    ];

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Activity Log</h2>

                <div className="bg-[#DCE6F2] rounded-lg shadow-sm overflow-hidden border border-gray-300">
                    {/* Header Controls */}
                    <div className="bg-[#C8D6E8] flex justify-between items-center p-4 border-b border-gray-300">
                        <div className="flex space-x-1">
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            <span className="font-bold text-gray-700">Chronological</span>
                        </div>
                        <span className="font-bold text-gray-700">Activity Timeline</span>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-[#E9EFF6] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm font-bold border-b border-gray-300">
                        <div className="flex flex-wrap gap-4 text-gray-800">
                            <span>Filter by:</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-green-600" /> Book Search</span>
                            <span className="flex items-center gap-1"><Bot className="w-4 h-4 text-blue-500" /> Robot Actions</span>
                            <span className="flex items-center gap-1"><User className="w-4 h-4 text-blue-700" /> Member Activity</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-red-500" /> Borrow/Return</span>
                            <span className="flex items-center gap-1"><Settings className="w-4 h-4 text-gray-600" /> Admin Updates</span>
                            <span className="flex items-center gap-1"><Settings className="w-4 h-4 text-gray-500" /> System Logs</span>
                        </div>
                        <button className="px-4 py-1 text-gray-700 transition-colors border border-blue-300 rounded shadow-sm bg-blue-200/50 hover:bg-blue-200">
                            Clear
                        </button>
                    </div>

                    {/* Timeline Content */}
                    <div className="p-8 bg-[#F3F0EC]">
                        {logs.map((group, groupIdx) => (
                            <div key={groupIdx} className="mb-8">
                                <h4 className="mb-4 font-bold text-gray-800">{group.date}</h4>
                                <div className="relative pl-4 space-y-2 border-l-2 border-gray-400">
                                    {group.events.map((event, idx) => (
                                        <div key={idx} className="flex items-start group">
                                            <div className="w-24 flex-shrink-0 text-sm font-mono text-gray-600 pt-0.5">
                                                {event.time}
                                            </div>
                                            <div className="flex items-center text-sm font-medium text-gray-700">
                                                <event.icon className="w-4 h-4 mr-3 text-gray-600" /> {/* Dynamic icon color could be better */}
                                                {event.message}
                                            </div>
                                            {/* Line connector visualization */}
                                            <div className="absolute -left-[5px] top-0 bottom-0 w-2.5 flex flex-col items-center justify-center">
                                                {/* Simple line implementation for now */}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ActivityLogs;