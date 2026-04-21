export const createKeys = () => {
    const rand = () => Math.random().toString(36).slice(2, 10);
    return {
        master: `master-${rand()}`,
        public: `public-${rand()}`,
    };
};

export const createMockLocker = () => ({
    id: `locker-${Math.random().toString(36).slice(2, 8)}`,
    name: 'Locker demo-locker',
    usedMB: 20.31,
    totalMB: 5120,
    speed: 'Standard',
    security: 'Standard',
    notes: 'Welcome to this locker! Feel free to add your notes here.',
    folders: [
        { id: 'docs', name: 'Documents', color: '#3B82F6' },
        { id: 'img', name: 'Images', color: '#EC4899' },
        { id: 'vid', name: 'Videos', color: '#8B5CF6' },
    ],
    files: [
        { id: 'f1', name: 'Project_Proposal.pdf', sizeMB: 2.29, date: '15/03/2026', folderId: 'docs', pinned: true },
        { id: 'f2', name: 'Design_Mockups.fig', sizeMB: 8.49, date: '14/03/2026', folderId: 'docs', pinned: false },
        { id: 'f3', name: 'Presentation.pptx', sizeMB: 5.34, date: '13/03/2026', folderId: 'docs', pinned: false },
        { id: 'f4', name: 'Budget_2026.xlsx', sizeMB: 1.14, date: '12/03/2026', folderId: 'docs', pinned: false },
        { id: 'f5', name: 'Team_Photo.jpg', sizeMB: 3.05, date: '11/03/2026', folderId: 'img', pinned: false },
    ],
});
