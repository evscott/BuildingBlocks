import React, { Component } from "react";
import { Form, Input, Message } from "semantic-ui-react";

class ContributeForm extends Component {
	render() {
		return (
			<Form>
				<Form.Field>
					<label>Amount to Contribute</label>
					<Input />
				</Form.Field>
			</Form>
		);
	}
}

export default ContributeForm;
