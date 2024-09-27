import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import('../router/home/Home'));
const SingleShowPage = lazy(() => import('../router/single-movie/SingleMovie')); 
const LikedShows = lazy(() => import('../router/liked-page/LikedShows')); 

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "show/:id", 
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <SingleShowPage />
        </Suspense>
      ),

    },
    {
      path: "liked-shows",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LikedShows />
        </Suspense>
      ),
    }
  ]);
};

export default RouteController;
