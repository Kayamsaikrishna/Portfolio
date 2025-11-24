import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After 4 seconds, redirect to portfolio selector
    const timer = setTimeout(() => {
      navigate("/selector");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <SplashScreen />
    </div>
  );
};

export default Index;
