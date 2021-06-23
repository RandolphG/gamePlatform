import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}
