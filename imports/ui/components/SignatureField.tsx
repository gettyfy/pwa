/**
 * Signature Pad Field Component
 * https://codesandbox.io/s/quizzical-bartik-3flkc FOR USER INITIALS SIGNATURE FIELD
 * https://dev.to/ma7eer/create-a-signature-pad-in-react-3mmi SIGNATURE USING REACT-SIGNATURE-PAD
 */


import React, { Component } from 'react'
import SignaturePad from 'react-signature-canvas'
import styled from '@emotion/styled'
import { useField, Form, Field, FieldProps } from 'formik'


export class SignatureField extends Component {
    state = { trimmedDataURL: null }
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }
    trim = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }
    render() {
        let { trimmedDataURL } = this.state
        return <div className={styles.container}>
            <div className={styles.sigContainer}>
                <SignaturePad canvasProps={{ className: styles.sigPad }}
                    ref={(ref) => { this.sigPad = ref }} />
            </div>
            <div>
                <button className={styles.buttons} onClick={this.clear}>
                    Clear
        </button>
                <button className={styles.buttons} onClick={this.trim}>
                    Trim
        </button>
            </div>
            {trimmedDataURL
                ? <img className={styles.sigImage}
                    src={trimmedDataURL} />
                : null}
        </div>
    }
}