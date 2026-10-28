import React from 'react'
import StudentCard from './components/StudentCard'
import ClassCard from './components/ClassCard'

const App = () => {
    const students = [
        { id: 204517, name: "Juliano M. Ataides", grade: 10, role: "Team Lead" },
        { id: 318246, name: "Hailey Ferreira", grade: 11, role: "Note Taker" },
        { id: 471093, name: "Joshua Chimeremeze Fineboy-Mark", grade: 9, role: "Researcher" },
        { id: 602158, name: "Steven R. Gonell", grade: 12, role: "Presenter" },
        { id: 155820, name: "Darius Gabriel Macancela-Landi", grade: 10, role: "Designer" },
        { id: 739401, name: "Yanzel Mejia", grade: 11, role: "Editor" },
        { id: 284673, name: "Kaira Ximena Mora", grade: 9, role: "Team Lead" },
        { id: 910347, name: "David T. Moreno-Viera", grade: 12, role: "Coder" },
        { id: 563218, name: "Rodney Morris", grade: 10, role: "Timekeeper" },
        { id: 408792, name: "Elhoussaine Nouri", grade: 11, role: "Researcher" },
        { id: 672035, name: "Liz Abigail Osorto", grade: 9, role: "Note Taker" },
        { id: 137569, name: "Brayan Paredes-Angamarca", grade: 10, role: "Designer" },
        { id: 820614, name: "Kenneth Eliezer Paz Serrano", grade: 12, role: "Presenter" },
        { id: 395847, name: "John Doe", grade: 11, role: "Coder" },
        { id: 246931, name: "Yandel Quinapanta", grade: 9, role: "Editor" },
        { id: 708152, name: "Rous Mery Rosario Tirado", grade: 10, role: "Team Lead" },
        { id: 483716, name: "Camila Sanchez", grade: 11, role: "Presenter" },
        { id: 591240, name: "Jean Chrys Santander", grade: 12, role: "Timekeeper" },
        { id: 164508, name: "Anthony Miguel Siri", grade: 9, role: "Researcher" },
    ]
    return (
        <>
            <ClassCard title={"Advanced Programming for IT"} subtitle={"Technology High School"}>
                {students.map((student) => {
                    return <StudentCard
                        key={student.id}
                        name={student.name}
                        grade={student.grade}
                        role={student.role}
                        studentId={student.id}
                    />
                })}
            </ClassCard>
        </>
    )
}

export default App