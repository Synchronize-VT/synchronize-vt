import React, { createContext, useEffect, useRef } from 'react';

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const ws = useRef(null);

    useEffect(() => {
        const connectWebSocket = () => {
            ws.current = new WebSocket('ws://localhost:4000');
            console.log("mounting");

            ws.current.onopen = () => {
                console.log('WebSocket connected');
            };

            ws.current.onclose = () => {
                console.log('WebSocket disconnected');
                // Attempt to reconnect after a delay
                setTimeout(connectWebSocket, 5000);
            };

            ws.current.onerror = (error) => {
                console.error('WebSocket error:', error);
            };

            ws.current.onmessage = (message) => {
                console.log('WebSocket message received:', message);
            };
        };

        connectWebSocket();

        return () => {
            console.log("Calling cleanup");
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    return (
        <WebSocketContext.Provider value={ws.current}>
            {children}
        </WebSocketContext.Provider>
    );
};
