import { Component, type ReactNode } from 'react';

interface State {
  error: Error | null;
}

/** 渲染崩溃兜底:显示错误信息而不是整页黑屏。 */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="empty-hero">
          <div className="glyph">⚠</div>
          <h2>页面渲染出错</h2>
          <p style={{ wordBreak: 'break-all', maxWidth: 560 }}>
            {this.state.error.message}
          </p>
          <button className="btn primary" onClick={() => this.setState({ error: null })}>
            重试
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
