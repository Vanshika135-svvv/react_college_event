export interface Event {
  id: number;
  title: string;
  category: 'academic' | 'sport' | 'cultural' | 'other';
  date: string;
  time: string;
  location: string;
  organizer: string;
  description: string;
  imageUrl: string;
}

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Annual Tech Fest '26",
    category: "academic",
    date: "2026-03-15",
    time: "10:00 AM",
    location: "Innovation Hall, Room 301",
    organizer: "Computer Science Club",
    description: "The biggest tech exhibition on campus! Featuring workshops on AI, blockchain, and cloud computing. Compete in the Code-A-Thon for a grand prize of $5000.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Varsity Football Championship",
    category: "sport",
    date: "2025-11-20",
    time: "05:00 PM",
    location: "Stadium Main Field",
    organizer: "Athletics Department",
    description: "Come cheer on the Eagles as they battle for the regional championship title! Concessions and merchandise will be available.",
    imageUrl: "https://img.freepik.com/premium-photo/team-celebrates-victory-game-cup-football-championship-world-professional-award-team-winner-tournament-champion-trophy_888396-9417.jpg?w=2000"
  },
  {
    id: 3,
    title: "Cultural Fusion Night",
    category: "cultural",
    date: "2026-01-28",
    time: "07:30 PM",
    location: "Auditorium Hall A",
    organizer: "Cultural Exchange Society",
    description: "A vibrant evening showcasing diverse talents from across the student body. Enjoy dance, music, poetry, and food from around the world.",
    imageUrl: "https://i.ytimg.com/vi/W2g2wr7WXTk/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Design Sprint Hackathon",
    category: "academic",
    date: "2026-04-10",
    time: "09:00 AM",
    location: "Art & Design Studio",
    organizer: "Visual Arts Guild",
    description: "A 24-hour creative challenge to design solutions for real-world campus problems using graphic design and UX/UI principles.",
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.fS5MmzY6yveXLSH4nlAGCgHaEV?cb=12&rs=1&pid=ImgDetMain"
  },
  {
    id: 5,
    title: "Career Fair 2026",
    category: "academic",
    date: "2026-02-05",
    time: "11:00 AM",
    location: "Campus Expo Center",
    organizer: "Career Services",
    description: "Meet recruiters from over 50 top companies looking to hire interns and new graduates. Bring your resume!",
    imageUrl: "https://www.marshall.edu/careereducation/files/Career-Fair-1024x671.png"
  },
  {
    id: 6,
    title: "Campus Cleanup Day",
    category: "other",
    date: "2025-10-25",
    time: "09:00 AM",
    location: "Central Campus Quad",
    organizer: "Environmental Club",
    description: "Join us to clean up the campus grounds and promote sustainability. Free lunch provided for all volunteers!",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.D9JPPqEm4G1tzgKmjmwrywHaEK?cb=12&rs=1&pid=ImgDetMain"
  }
];
