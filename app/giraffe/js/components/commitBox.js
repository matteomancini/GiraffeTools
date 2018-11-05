import React, { Fragment } from "react";

import Commit from "./commit";
import { groupByDate } from "../utils/utils";

class CommitBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commits: null
    };
  }

  componentDidMount() {
    const { full_name } = this.props.repository;

    fetch(`https://api.github.com/repos/${full_name}/commits`)
      .then(response => response.json())
      .then(commits => this.setState({ commits }))
      .catch();
  }

  render() {
    const { commits } = this.state;
    const { full_name } = this.props.repository;
    const branch = "master";
    const groupedCommits = commits && groupByDate(commits);
    const dates =
      groupedCommits &&
      Object.keys(groupedCommits).sort(function(a, b) {
        a = new Date(a);
        b = new Date(b);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    return groupedCommits ? (
      <div>
        {dates.map(date => {
          const days_ago = (Date.now() - new Date(date)) / 1000 / 3600 / 24;

          return (
            <div key={`${date}`}>
              <h6>
                {days_ago < 1
                  ? "Today"
                  : days_ago < 2
                    ? "Yesterday"
                    : `${date}`}
              </h6>
              <ul className="commit-day border">
                {groupedCommits[date].map(({ commit }) => (
                  <Commit
                    key={commit.sha}
                    commit={commit}
                    full_name={full_name}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    ) : (
      <div>No commits yet...</div>
    );
  }
}

export default CommitBox;
