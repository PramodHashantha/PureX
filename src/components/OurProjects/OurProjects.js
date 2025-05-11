import React from "react";
import "./OurProjects.css";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 6,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 6",
            description: "Content for Project 6",
          },
          des: {
            topic: "topic 6",
            description:
              "description 6 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
        {
          id: 1,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 1",
            description: "Content for Project 1",
          },
          des: {
            topic: "topic 1",
            description:
              "description 1 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
        {
          id: 2,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 2",
            description: "Content for Project 2",
          },
          des: {
            topic: "topic 2",
            description:
              "description 2 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
        {
          id: 3,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 3",
            description: "Content for Project 3",
          },
          des: {
            topic: "topic 3",
            description:
              "description 3 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
        {
          id: 4,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 4",
            description: "Content for Project 4",
          },
          des: {
            topic: "topic 4",
            description:
              "description 4 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
        {
          id: 5,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 5",
            description: "Content for Project 5",
          },
          des: {
            topic: "topic 5",
            description:
              "description 5 TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT TYPE HERE MUCH YOU WANT ",
          },
        },
      ],
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      items: [...prevState.items.slice(1), prevState.items[0]],
      isDesCardOpen: false,
    }));
  };

  dropdowndesclick = () => {
    this.setState({ isDesCardOpen: !this.state.isDesCardOpen });
  };

  render() {
    const { isDesCardOpen } = this.state;
    return (
      <>
        <div className="full-page">
          <div className="Main-container" id="ourprojects">
            <div className="container">
              <div id="slide">
                {this.state.items.map((item) => (
                  <div
                    key={item.id}
                    className="item"
                    style={{ backgroundImage: item.backgroundImage }}
                  >
                    <div className="content">
                      <div className="name">{item.content.name}</div>
                      <div className="des">{item.content.description}</div>
                      <div
                        className="dropdowndes"
                        onClick={this.dropdowndesclick}
                      >
                        {isDesCardOpen ? (
                          <FaAngleDoubleLeft />
                        ) : (
                          <FaAngleDoubleRight />
                        )}
                      </div>
                      <div
                        className={isDesCardOpen ? "DesCard open" : "DesCard"}
                      >
                        <h1>{item.des.topic}</h1>
                        <p>{item.des.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button id="next" onClick={this.handleNext}>
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
