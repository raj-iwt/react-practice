import React from "react";

interface ErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state = { hasError: false }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // You can also log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{this.props.fallback}</h1>;
        }

        return this.props.children; 
    }
}