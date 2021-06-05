class User {
  async RegisterUser(registerationData) {
    await $.post('/user/register', registerationData, (user) => {
      if (user.length !== 0) {
        Notify.success({
          title: 'Registration Complete!',
          html: `Welcome ${user.userName}`
        });
        $("#register").modal('close');
        $("#login").modal('open');
      } else {
        Notify.error({
          title: 'Failed Registration',
          html: 'Invalid data or user is already taken!'
        });
      }
    });
  }

  async userMode(userName) {
    await $.ajax({
      url: `/update/${userName}`,
      method: "PUT",
      success: function () { },
      error: function (xhr, text, error) {
        console.log(text);
      }
    });
  }

  async LoginUser(loginData) {
    $.post('/user/login', loginData, function (user) {
      if (user.length !== 0) {
        Notify.success({
          title: 'Welcome User',
          html: `Welcome back ${user.userName} :)`
        });
        $("#login").modal('close');
        checkIfLoggedIn();
      } else {
        Notify.error({
          title: 'Invalid Data',
          html: 'Invalid username or password!'
        });
      }
    });
  }

  async checkLog() {
    const check = await $.get('/session')
    return check;
  }
}
class Category {
  constructor() {
    this.data = [];
  }
  async getCount(categoryName) {
    const data = await $.get(`/count/${categoryName}`);
    return data;
  }
  async get(categoryName, sess) {
    const data = await $.get(`/${categoryName}/${sess}`);
    return data;
  }
  async save(categoryName, Info) {
    const res = await $.post(`/${categoryName}`, Info);
    return res;
  }
  async remove(categoryName, itemId) {
    await $.ajax({
      url: `/${categoryName}/${itemId}`,
      method: "DELETE",
      success: () => {
        Notify.success({
          title: "Item Deleted",
          html: "Item has been successfully deleted.",
        });
      },
    });
  }
}

class APIs {
  async getWeather(lati, long) {
    const data = await $.get(`/weather/${lati}/${long}`);
    return data;
  }
  async getBook(bookName) {
    const res = await $.get(`/book/${bookName}`);
    return res;
  }
  async getMovie(movieName) {
    const res = await $.get(`/movie/${movieName}`);
    return res;
  }
  async getSeries(seriesName) {
    const res = await $.get(`/series/${seriesName}`);
    return res;
  }
}