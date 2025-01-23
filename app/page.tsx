'use server';
import { createClient } from '../supabaseclient';

export default async function Countries() {
  const supabase = await createClient();
  console.log(supabase);
  const { data: countries } = await supabase.from("tweets").select();
  console.log(countries);
  try {
    return (
      <div>
        <section className='text-center flex-col pb-10' >
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className='justify-center pt-5'>
        <p>Name: Sufia Auliah Salsabila</p>
        <p>Matric: 092022090029</p>
        </div>
        </section>
        <section>
        <div className="custom-scroll overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Username</th>
                <th className="border border-gray-300 p-2">Content</th>
                <th className="border border-gray-300 p-2">Handle</th>
                <th className="border border-gray-300 p-2">Timestamp</th>
                {/* Tambahkan kolom lain sesuai kebutuhan */}
              </tr>
            </thead>
            <tbody>
              {countries ? countries.map((tweets) => (
                <tr key={tweets.id}>
                  <td className="border border-gray-300 p-2">{tweets.id}</td>
                  <td className="border border-gray-300 p-2">{tweets.username}</td>
                  <td className="border border-gray-300 p-2">{tweets.content}</td>
                  <td className="border border-gray-300 p-2">{tweets.handle}</td>
                  <td className="border border-gray-300 p-2">{tweets.timestamp}</td>
                  {/* Tambahkan data lain sesuai kebutuhan */}
                </tr>
              )) : (
                <tr>
                  <td colSpan={2} className="border border-gray-300 p-2 text-center">Tidak ada data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error("Error rendering tweets:", error);
    return <div>Error loading data</div>; // Tampilkan pesan kesalahan
  }
}
