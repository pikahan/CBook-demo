import React from 'react';
import PDF from 'react-pdf-js';
import pdfFile from '../assets/test.pdf';
import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;

class PDFDemo extends React.Component {
  state = {
    scale: 1.5
  };

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  };

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  };

  renderPagination = (page, pages) => {
    let previousButton = <Button type="primary" onClick={this.handlePrevious}><Icon type="left" />上一页</Button>;
    if (page === 1) {
      previousButton = <Button type="primary"><Icon type="left" />上一页</Button>;
    }
    let nextButton = <Button type="primary" onClick={this.handleNext}>下一页<Icon type="right" /></Button>;
    if (page === pages) {
      nextButton = <Button type="primary">下一页<Icon type="right" /></Button>;
    }
    return (
      <div>
        <ButtonGroup style={{'margin-left':'5em'}}>
          {previousButton}
          {nextButton}
        </ButtonGroup>
      </div>
    );
  };

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF
          file={pdfFile}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
          scale={this.state.scale}
        />
        {pagination}
      </div>
    )
  }
}

export default PDFDemo;