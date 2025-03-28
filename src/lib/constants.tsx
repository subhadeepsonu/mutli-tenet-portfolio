export const userData = {
    "user": {
        "id": "12345",
        "domain": "johndoe",
        "email": "johndoe@example.com",
        "bio": "A passionate full-stack developer.",
        "socialLinks": {
            "github": "https://github.com/johndoe",
            "linkedin": "https://linkedin.com/in/johndoe",
            "twitter": "https://twitter.com/johndoe"
        },
        "style": {
            "id": 1,
            "name": "Dark Theme"
        },
        "skills": [
            { "id": "1", "name": "JavaScript" },
            { "id": "2", "name": "React" },
            { "id": "3", "name": "Node.js" },
            { "id": "4", "name": "PostgreSQL" }
        ],
        "projects": [
            {
                "id": "proj1",
                "index": 1,
                "title": "Portfolio Website",
                "description": "A multi-tenant portfolio website.",
                "link": "https://johndoe.dev",
                "createdAt": "2024-03-01T12:00:00Z",
                "updatedAt": "2024-03-02T12:00:00Z"
            },
            {
                "id": "proj2",
                "index": 2,
                "title": "E-commerce App",
                "description": "A full-stack e-commerce platform.",
                "link": "https://shop.johndoe.dev",
                "createdAt": "2023-10-15T10:30:00Z",
                "updatedAt": "2024-01-20T08:15:00Z"
            }
        ],
        "experience": [
            {
                "id": "exp1",
                "index": 1,
                "title": "Software Engineer",
                "company": "TechCorp",
                "location": "Remote",
                "startDate": "2022-06-01",
                "endDate": "2024-02-28",
                "description": "Worked on backend services and frontend development.",
                "createdAt": "2024-03-01T12:00:00Z",
                "updatedAt": "2024-03-02T12:00:00Z"
            },
            {
                "id": "exp2",
                "index": 2,
                "title": "Frontend Developer Intern",
                "company": "StartupX",
                "location": "New York, USA",
                "startDate": "2021-01-01",
                "endDate": "2021-06-01",
                "description": "Developed React UI components and improved performance.",
                "createdAt": "2024-03-01T12:00:00Z",
                "updatedAt": "2024-03-02T12:00:00Z"
            }
        ],
        "createdAt": "2024-03-01T12:00:00Z",
        "updatedAt": "2024-03-02T12:00:00Z"
    }
}
export const BASEURL = "http://localhost:3000/api/v1"