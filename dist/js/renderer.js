class Renderer {
    async renderData(data, handlebarScript, count, category){
        $('#content').empty();
        if (data.length !== 0){
            const template = Handlebars.compile($(handlebarScript).html());
            $('#content').append(template(data));
        }
        $('.active').find('.badge').text(`${count}`);
    }
}