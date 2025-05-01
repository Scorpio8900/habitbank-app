import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function HabitBank() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { name: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">HabitBank</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a new habit"
        />
        <Button onClick={addHabit}>Add</Button>
      </div>
      {habits.map((habit, index) => (
        <Card
          key={index}
          className={`mb-2 cursor-pointer ${habit.completed ? "bg-green-100" : "bg-white"}`}
          onClick={() => toggleHabit(index)}
        >
          <CardContent className="p-4">
            <span className={habit.completed ? "line-through" : ""}>
              {habit.name}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}