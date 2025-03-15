import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [news, setNews] = useState<News[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState<string | null>(null);

  type News = {
    id: string;
    news_name: string;
    photo_url: string;
  };

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNews(data);
    }
    fetchNews();
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      if (session.user.role === "admin") {
        setIsAuthorized(true);
      } else {
        router.push("/");
        signOut();
      }
    }
  }, [status, session, router]);

  const handleAddNews = () => {
    setNews([...news, { id: "", news_name: "", photo_url: "" }]);
  };

  const handleSaveChanges = async (index: number) => {
    const newsItem = news[index];

    const payload = {
      news_id: newsItem.id,
      news_name: newsItem.news_name,
      photo_url: newsItem.photo_url,
      user: { id: session?.user.id, role: session?.user.role },
    };

    try {
      const response = await fetch(
        newsItem.id ? "/api/news/update" : "/api/news/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Failed to save changes");

      alert("Changes saved successfully");
      router.reload();
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const handleDeleteNews = async () => {
    if (!newsToDelete) return;

    try {
      const response = await fetch("/api/news/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          news_id: newsToDelete,
          user: { id: session?.user.id, role: session?.user.role },
        }),
      });

      if (!response.ok) throw new Error("Failed to delete news");

      setNews((prevNews) => prevNews.filter((news) => news.id !== newsToDelete));
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news.");
    } finally {
      setShowDeleteModal(false);
      setNewsToDelete(null);
    }
  };

  const handleDescriptionChange = (index: number, newDescription: string) => {
    const updatedNews = [...news];
    updatedNews[index].news_name = newDescription;
    setNews(updatedNews);
  };

  const handlePhotoUrlChange = (index: number, newUrl: string) => {
    const updatedNews = [...news];
    updatedNews[index].photo_url = newUrl;
    setNews(updatedNews);
  };

  const handleFileUpload = async (index: number, file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        handlePhotoUrlChange(index, data.url);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/");
    return null;
  }
  if (!isAuthorized) return <p>Checking authorization...</p>;

  return (
    <div className="flex flex-col items-center m-3 text-start justify-center">
      <div className="w-3/4">
        <h2 className="mt-4">Manage News</h2>
        <hr />
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">News Name</th>
              <th className="py-2 px-4">Photo</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem, index) => (
              <tr key={newsItem.id || index}>
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">
                  <input
                    type="text"
                    value={newsItem.news_name}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className="border p-1 w-full"
                  />
                </td>
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    {newsItem.photo_url && (
                      <Image
                        src={newsItem.photo_url}
                        alt={`Photo ${index + 1}`}
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="mr-2"
                      />
                    )}
                    <input
                      type="file"
                      onChange={(e) =>
                        e.target.files &&
                        handleFileUpload(index, e.target.files[0])
                      }
                      className="border p-1 w-full"
                    />
                  </div>
                </td>
                <td className="justify-center items-center">
                  <Button
                    onClick={() => handleSaveChanges(index)}
                    className="text-center mr-2"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setNewsToDelete(newsItem.id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleAddNews}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New News
        </button>

        <button
          onClick={() => router.back()}
          className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Are you sure you want to delete this news?</p>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleDeleteNews}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Yes, delete
              </Button>
              <Button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
