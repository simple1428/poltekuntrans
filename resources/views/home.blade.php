<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @vite('resources/css/app.css')
</head>
<body>
    <div class="flex flex-col min-h-[100vh] items-center justify-center p-5 gap-5">

        <h1 class="text-3xl font-bold border-b ">
            Data User
        </h1>
        <table class="table-auto border w-full  ">
            <thead class="border bg-gray-100">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody >
                @foreach ($users as $index =>  $user)
                <tr class="border">
                    <td>{{ $index+1 }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->email }}</td>
                  </tr>
                @endforeach


            </tbody>
          </table>
    </div>
</body>
</html>
