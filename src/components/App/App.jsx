import Searchbar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import ImageGallery from 'components/ImageGallery';
import PixabayApi from 'components/Api/Api';
import Button from 'components/Button/Button';
import Spinner from 'components/Spinner';
import { Notify } from 'notiflix';

const request = new PixabayApi();

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setShowLoadMore(false);

        setGallery([]);
        request.resetPage();
        const images = await request.getPhotos(searchQuery);

        if (images.totalHits < request.per_page) {
          setShowLoadMore(false);
        } else {
          setShowLoadMore(true);
        }

        if (!images.totalHits) {
          Notify.failure(`No such results like ${searchQuery}`);
        } else {
          Notify.success(
            `${images.totalHits} results searching ${searchQuery}`
          );
        }

        setGallery([...images.hits]);
      } catch (error) {
        console.error(error);
        Notify.failure(`Something went wrong: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  const handleLoadMoreButton = async () => {
    setIsLoading(true);

    try {
      const images = await request.getPhotos(searchQuery);

      setGallery(gallery => [...gallery, ...images.hits]);

      if (images.hits.length < request.per_page) {
        setShowLoadMore(false);
        Notify.warning(`That was all results..`);
      } else {
        setShowLoadMore(true); // Додав цей рядок
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Searchbar onSubmit={value => setSearchQuery(value)} />
      <ImageGallery images={gallery} />
      <Spinner isLoading={isLoading} />
      {showLoadMore && <Button onClick={handleLoadMoreButton} />}
    </div>
  );
};

export default App;
