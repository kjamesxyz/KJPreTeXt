var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Section",
  "number": "",
  "title": "Homework 1",
  "body": " Homework 1    Due Date: This assignment is due at the beginning of class on Wednesday, July 1.    Practice Problems   It is strongly recommended that you complete the below practice problems from the course textbook before beginning the assignment. These solutions do not need to be submitted and will not be graded.      Exercises 1.1 [pg.10]: Problems 1-4, 11-12, 21-22, 25.       Exercises 1.2 [pg.17]: Problems 1-2, 7-8, 11-12, 29, 35-38.       Exercises 1.3 [pg.27]: Problems 1-2, 5, 7, 9-10, 13, 15.      Assigned Problems    Instructions: Write solutions to the following problems in the space provided. If you need additional space, you may attach scratch work to the back of this sheet. Please be sure any additional work is clearly labeled with the question it corresponds to.     Provide an example of a second-order, linear differential equation. Justify your answer.      Find an interval on which the function is a solution to the differential equation       A tank is holding 1000L of pure water. A brine solution (0.1 kg\/L) is poured into the tank at a constant rate of 6L\/min. The solution in the tank is always kept well-stirred and is drained out of the tank at 6 L\/min.     Draw a picture of the scenario.      Identify and label the independent and dependent variable in the model.      Write an initial value problem that models the amount of salt in the tank over time.      Solve the initial value problem you created in the above problem.      "
},
{
  "id": "homework-2-3-3",
  "level": "2",
  "url": "homework-2.html#homework-2-3-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   Exercises 1.1 [pg.10]: Problems 1-4, 11-12, 21-22, 25.   "
},
{
  "id": "homework-2-3-4",
  "level": "2",
  "url": "homework-2.html#homework-2-3-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   Exercises 1.2 [pg.17]: Problems 1-2, 7-8, 11-12, 29, 35-38.   "
},
{
  "id": "homework-2-3-5",
  "level": "2",
  "url": "homework-2.html#homework-2-3-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "   Exercises 1.3 [pg.27]: Problems 1-2, 5, 7, 9-10, 13, 15.   "
},
{
  "id": "homework-2-4-3",
  "level": "2",
  "url": "homework-2.html#homework-2-4-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Provide an example of a second-order, linear differential equation. Justify your answer.   "
},
{
  "id": "homework-2-4-4",
  "level": "2",
  "url": "homework-2.html#homework-2-4-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Find an interval on which the function is a solution to the differential equation    "
},
{
  "id": "homework-2-4-5",
  "level": "2",
  "url": "homework-2.html#homework-2-4-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  A tank is holding 1000L of pure water. A brine solution (0.1 kg\/L) is poured into the tank at a constant rate of 6L\/min. The solution in the tank is always kept well-stirred and is drained out of the tank at 6 L\/min.     Draw a picture of the scenario.      Identify and label the independent and dependent variable in the model.      Write an initial value problem that models the amount of salt in the tank over time.      Solve the initial value problem you created in the above problem.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
