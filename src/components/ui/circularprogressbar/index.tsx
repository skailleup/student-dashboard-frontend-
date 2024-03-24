"use client";

import * as React from "react";
import { useEffect, useRef } from 'react';

interface CircularProgressBarProps {
  percent: number;
}

const CircularProgressBar = ({ percent }: CircularProgressBarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 10;
        const startAngle = -0.5 * Math.PI;
        const endAngle = (2 * percent / 100 - 0.5) * Math.PI;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.strokeStyle = '#d2d6dc';
        context.lineWidth = 4;
        context.stroke();

        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        context.strokeStyle = '#48bb78';
        context.stroke();

        context.font = '12px';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#000000';
        context.fillText(`${percent}%`, centerX, centerY);
      }
    }
  }, [percent]);

  return <canvas ref={canvasRef} width={50} height={50} />;
};

export default CircularProgressBar;

