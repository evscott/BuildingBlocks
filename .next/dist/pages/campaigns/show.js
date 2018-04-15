"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/eliotscott/WorkStation/BuildingBlocks/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: "renderCards",
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: "Address of Manager",
				description: "The manager created this campaign and can create requests to withdraw money",
				style: { overflowWrap: "break-word" }
			}, {
				header: minimumContribution,
				meta: "Minimum Contribution (wei)",
				description: "You must contribute at least this much wei to become an approver"
			}, {
				header: requestsCount,
				meta: "Number of Requests",
				description: "A request tries to withdraw money from the contract. Requests must be approved by approvers"
			}, {
				header: approversCount,
				meta: "Number of Approvers",
				description: "Number of people who have already donated to this campaign"
			}, {
				header: _web2.default.utils.fromWei(balance, "ether"),
				meta: "Campaign Balance (ether)",
				description: "The balance is how much money this campaign has left to spend."
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement("h3", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, _react2.default.createElement("a", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, "View Requests")))))));
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt("return", {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztnQ0FnQlM7Z0JBT1QsS0FQUyxBQU9KO09BUEksQUFFWixpQkFGWSxBQUVaO09BRlksQUFHWixpQkFIWSxBQUdaO09BSFksQUFJWiw2QkFKWSxBQUlaO09BSlksQUFLWix1QkFMWSxBQUtaO09BTFksQUFNWix3QkFOWSxBQU1aLEFBR0Q7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFJRSxBQUNEO1dBQU8sRUFBRSxjQU5HLEFBQ2IsQUFLUSxBQUFnQjtBQUx4QixBQUNDLElBRlk7WUFRYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBWFksQUFRYixBQUlFO0FBSkYsQUFDQztZQUtELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFqQlksQUFjYixBQUlFO0FBSkYsQUFDQztZQUtELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkF2QlksQUFvQmIsQUFJRTtBQUpGLEFBQ0M7WUFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FENUIsQUFDUyxBQUE0QixBQUNwQztVQUZELEFBRU8sQUFDTjtpQkE3QkYsQUFBYyxBQTBCYixBQUlFLEFBSUg7QUFSQyxBQUNDOzt3Q0FPSyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO2VBQW5CO2lCQUFQLEFBQU8sQUFDUDtBQURPO0lBQUE7Ozs7MkJBR0MsQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esa0NBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUF5QjtBQUF6QjtXQURELEFBQ0MsQUFBeUIsQUFBSyxBQUU5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQUxILEFBQ0MsQUFHQyxBQUNDLEFBSUY7QUFKRTt5QkFJRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFoQlAsQUFDQyxBQUVDLEFBU0MsQUFDQyxBQUNDLEFBQ0MsQUFDQyxBQVFQOzs7Ozt3R0F0RjRCLEE7Ozs7O1lBQ3RCO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7ZUFFaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQSxBQUE4Qjs7WUFBOUM7QTs7a0JBR0ksTUFBQSxBQUFNLE1BRFQsQUFDZSxBQUNyQjs4QkFBcUIsUUFGZixBQUVlLEFBQVEsQUFDN0I7a0JBQVMsUUFISCxBQUdHLEFBQVEsQUFDakI7d0JBQWUsUUFKVCxBQUlTLEFBQVEsQUFDdkI7eUJBQWdCLFFBTFYsQUFLVSxBQUFRLEFBQ3hCO2tCQUFTLFFBQUEsQSxBQU5ILEFBTVc7QUFOWCxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUHdCLEEsQUEwRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsaW90c2NvdHQvV29ya1N0YXRpb24vQnVpbGRpbmdCbG9ja3MifQ==