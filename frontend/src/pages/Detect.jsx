import { useRef, useState, useEffect } from "react";
import { Camera, Upload, RotateCw, Download } from "lucide-react";
import "./Detect.css";
import { API_URL } from "../config";

export default function Detect() {
  const videoRef = useRef(null);
  const [detected, setDetected] = useState("");
  const [loading, setLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setError("");
      }
    } catch (err) {
      setError("Tidak bisa akses kamera");
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      setCameraActive(false);
    }
  };

  const captureAndDetect = async () => {
    if (!cameraActive) return setError("Kamera tidak aktif");

    setLoading(true);
    setError("");

    try {
      const video = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);

      const frame = canvas.toDataURL("image/jpeg");

      const response = await fetch(`${API_URL}/detect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: frame }),
      });

      const data = await response.json();

      setDetected("data:image/jpeg;base64," + data.image);
    } catch (err) {
      console.error(err);
      setError("Gagal mendeteksi.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const response = await fetch(`${API_URL}/detect`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: event.target.result }),
        });

        const data = await response.json();
        setDetected("data:image/jpeg;base64," + data.image);
      } catch (err) {
        console.error(err);
        setError("Gagal melakukan deteksi.");
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="detect-page">
      <header className="detect-header">
        <a href="/" className="detect-logo">
          Smart Waste<br />Classifier With YOLO
        </a>
        <nav className="detect-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/detection" className="nav-link active">Detection</a>
          <a href="/categories" className="nav-link">Category</a>
        </nav>
        <button className="profile-btn">nama profile</button>
      </header>

      <main className="detect-main">
        <div className="detect-container">
          <h1 className="detect-title">Deteksi Sampah dengan YOLO</h1>

          {error && <div className="error-message">⚠️ {error}</div>}

          <div className="detect-content">
            {/* Camera */}
            <div className="camera-section">
              <div className="video-container">
                <video ref={videoRef} autoPlay playsInline muted />
              </div>

              <div className="camera-controls">
                <button 
                  onClick={captureAndDetect} 
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? "Mendeteksi..." : "Capture & Detect"}
                </button>

                <label className="btn btn-secondary">
                  <Upload size={20} />
                  Upload Gambar
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                  />
                </label>

                {!cameraActive ? (
                  <button onClick={startCamera} className="btn btn-success">
                    Aktifkan Kamera
                  </button>
                ) : (
                  <button onClick={stopCamera} className="btn btn-danger">
                    Matikan Kamera
                  </button>
                )}
              </div>
            </div>

            {/* Result */}
            <div className="result-section">
              <h2>Hasil Deteksi</h2>

              {detected ? (
                <img src={detected} className="result-image" />
              ) : (
                <p>Belum ada hasil</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
