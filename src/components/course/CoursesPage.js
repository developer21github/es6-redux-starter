import React,{PropTypes} from 'react';

class CoursesPage extends React.Component{
  constructor(props,contex){
    super(props,contex);

    this.state={
      course:{title:null}
    };

    this.onClickSave=this.onClickSave.bind(this);
    this.onTitleChange=this.onTitleChange.bind(this);

  }

  onTitleChange(event){
    const course=this.state.course;
    course.title=event.target.value;
    this.setState({course:course});
  }

  onClickSave(){
    alert(`saveing ${this.state.course.title}`);
  }

  render(){
    return(
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="save" />

      </div>
    );
  }
}

export default CoursesPage;
