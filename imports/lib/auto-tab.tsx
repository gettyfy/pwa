// import React, { Component } from 'react';
// import { Input as InputField } from '@chakra-ui/core';
// import PropTypes from 'prop-types';

// class Autotab extends Component {
//     constructor(props) {
//         super(props);

//         this.handleChange = this.handleChange.bind(this);
//         this.handleTab = this.handleTab.bind(this);
//     }

//     handleChange(e) {
//         const input = e.target.value;
//         this.props.onChange(input);
//     }

//     // Need to refactor and target components more efficiently
//     handleTab(e) {
//         const target = e.target;
//         const input = target.value;
//         if (input.length >= this.props.maxLength) {
//             let next = target;
//             next = next.nextElementSibling;
//             while (next) {
//                 if (next === null) break;
//                 if (next.tagName.toLowerCase() === 'input') {
//                     next.focus();
//                     break;
//                 }
//             }
//         }
//     }

//     // Need to recreate this Form using Redux Forms
//     render() {
//         const { onChange } = this.props;
//         return (
//             <InputField
//                 type={this.props.type}
//                 name={this.props.name}
//                 placeholder={this.props.hint}
//                 maxLength={this.props.maxLength}
//                 defaultValue={this.props.value}
//                 // onChange={() => this.handleChange}
//                 // onChange={(value) => {
//                 //   this.handleTab(value)
//                 // }}
//                 onKeyUp={this.props.maxLength ? this.handleTab : null}
//                 size={this.props.size}
//                 autoFocus={this.props.autoFocus}
//             />
//         );
//     }
// }

// Autotab.propTypes = {
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func,
//     type: PropTypes.string,
//     hint: PropTypes.string,
//     value: PropTypes.string,
//     maxLength: PropTypes.number,
//     size: PropTypes.string,
//     autoFocus: PropTypes.bool,
// };

// export default Autotab;
