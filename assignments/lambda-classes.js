// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
  changeGrade(student) {
    function change() {
      const min = Math.ceil(-10);
      const max = Math.floor(11);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    const newChange = change()
    if (student.grade + newChange > 100) {
      student.grade = 100
    } else {
      student.grade += newChange
    }
    return student.grade
  }
}

class Student extends Person {
  constructor(props) {
    super(props)
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
    this.grade = props.grade
    this.graduated = false
  }
  listsSubjects() {
    return this.favSubjects
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduate() {
    if (this.grade < 70) {
      return `${this.name} hasn't graduated yet!`
    } else {
      this.graduated = true
      return `${this.name}, congratulations on graduating!`
    }
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}.`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`
  }
}

const fred = new Person({
  name: "Fred",
  location: "Bedrock",
  age: 37
})
const barney = new Person({
  name: "Barney",
  location: "Rockville",
  age: 33
})
const charles = new Instructor({
  name: "Charles",
  location: "Westchester",
  age: 45,
  favLanguage: "C++",
  specialty: "Operating Systems",
  catchPhrase: `Rally around me, my X-men!`
})
const optimus = new Instructor({
  name: "Optimus",
  location: "Cybertron",
  age: 137,
  favLanguage: "Ruby",
  specialty: "Back-end",
  catchPhrase: `Autobots, roll out!`
})
const jean = new Student({
  name: "Jean",
  location: "Westchester",
  age: 37,
  previousBackground: "Waitress",
  className: "X-men",
  favSubjects: ["Flying", "Psychic-ing"],
  grade: 80
})
const bumblebee = new Student({
  name: "Bumblebee",
  location: "Moon",
  age: 97,
  previousBackground: "Old Car",
  className: "Autobot",
  favSubjects: ["Transforming", "Autobot-ing"],
  grade: 77
})
const nick = new ProjectManager({
  name: "Nick",
  location: "SHIELD HQ",
  age: 50,
  favLanguage: "BASH",
  specialty: "DevOps scripting",
  catchPhrase: `Bitch, please! You've been to space!`,
  gradClassName: "Secret School",
  favInstructor: "Charles"
})
const matrix = new ProjectManager({
  name: "Matrix of Leadership",
  location: "Outerspace",
  age: 1000000,
  favLanguage: "Assembly",
  specialty: "Low-level Kernel Hacking",
  catchPhrase: `You've got the touch! You've got the power!`,
  gradClassName: "Beginning of time",
  favInstructor: "Optimus"
})

console.log(fred.speak())
console.log(barney.location)
console.log(charles.grade(jean, "Psionic Powers"))
console.log(optimus.demo("transforming in to a car"))
console.log(jean.listsSubjects())
console.log(bumblebee.PRAssignment("Transforming"))
console.log(nick.grade(jean, "Flying"))
console.log(nick.standUp("#Secret-SHIELD-No-Skrulls-Allowed"))
console.log(matrix.debugsCode(bumblebee, "Rolling out"))
console.log(charles.changeGrade(jean))
console.log(jean.graduate())
