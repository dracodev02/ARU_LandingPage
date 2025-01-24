"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Danh sách tài nguyên cần preload
const assets = [
  "/assets/base.png",
  "/assets/character-man.png",
  "/assets/character-women.png",
  "/assets/arrowpixel.svg",
  "/assets/example1.png",
  "/assets/logoAru.svg",
  "/assets/nft-demo.png",
  //   "/assets/BrandFootage1.mp4",
];

// Định nghĩa kiểu dữ liệu cho LoadingContext
interface LoadingContextType {
  isLoading: boolean;
  progress: number;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  progress: 0,
});

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let isMounted = true; // Để tránh cập nhật state khi component đã unmount
    const totalAssets = assets.length;
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets += 1;
      if (isMounted) {
        setProgress(Math.round((loadedAssets / totalAssets) * 100));
        if (loadedAssets === totalAssets) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      }
    };

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Tiếp tục ngay cả khi có lỗi
      });
    };

    const preloadVideo = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = src;
        video.preload = "auto";
        video.onloadeddata = () => resolve();

        video.onerror = () => resolve(); // Tiếp tục ngay cả khi có lỗi
      });
    };

    const preloadAssets = async () => {
      const preloadPromises = assets.map(async (asset) => {
        if (asset.endsWith(".mp4")) {
          await preloadVideo(asset);
        } else {
          await preloadImage(asset);
        }
        updateProgress();
      });

      await Promise.all(preloadPromises);
    };

    preloadAssets();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, progress }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
