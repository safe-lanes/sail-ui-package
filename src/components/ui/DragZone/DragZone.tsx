import React from "react";
import { useDropzone } from "react-dropzone";

interface DragZoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const DragZone: React.FC<DragZoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500"
    >
      <input {...getInputProps()} />
      <p className="text-gray-500">Drag & drop files here, or click to select</p>
    </div>
  );
};

export default DragZone;
