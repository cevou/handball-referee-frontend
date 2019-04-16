import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import StatisticsTable from './StatisticsTable';
import { getOrder, getOrderBy, getQuestions } from '../reducers';
import { sort } from '../actions';
import QuestionDialog from './QuestionDialog';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
});

class Statistics extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string,
    }).isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      testAsked: PropTypes.number,
      testCorrect: PropTypes.number,
      testPercentageCorrect: PropTypes.number,
      testWrong: PropTypes.number,
      testPercentageWrong: PropTypes.number,
    })),
    onSort: PropTypes.func.isRequired,
    order: PropTypes.string,
    orderBy: PropTypes.string,
  };

  static defaultProps = {
    questions: [],
    order: 'asc',
    orderBy: 'id',
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      question: null,
    };
  }

  onClose = () => {
    this.setState({
      open: false,
    });
  };

  handleShowDetails = (question) => {
    this.setState({
      open: true,
      question,
    });
  };

  render() {
    const {
      classes, questions, onSort, orderBy, order,
      match: { params: { lang } },
    } = this.props;
    const { open, question } = this.state;

    return (
      <Paper className={classes.root}>
        <Typography variant="h6" color="inherit">
          Statistics
        </Typography>
        <StatisticsTable
          questions={questions}
          onSort={onSort}
          order={order}
          orderBy={orderBy}
          onShowDetails={this.handleShowDetails}
        />
        <QuestionDialog
          open={open}
          onClose={this.onClose}
          lang={lang}
          question={question}
        />
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  questions: getQuestions(state, props.match.params.lang),
  order: getOrder(state),
  orderBy: getOrderBy(state),
});
const mapDispatchToProps = dispatch => ({
  onSort: (event, property) => dispatch(sort(property)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Statistics));
