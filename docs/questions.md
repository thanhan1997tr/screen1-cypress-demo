# Questions

## 1. Tester nên viết kiểm thử vào lúc nào?

- **Kiểm thử từ sớm (Shift Left Testing)**: Tester tham gia vào các giai đoạn đầu của phát triển, từ phân tích yêu cầu và thiết kế.
- **Tạo test case dựa trên thiết kế**: Tester viết test case ngay từ khi tính năng đang được phát triển.
- **Phát hiện lỗi sớm**: Việc bắt đầu kiểm thử sớm giúp phát hiện lỗi khi tính năng đang được phát triển.
- **Tích hợp kiểm thử tự động**: Tester có thể viết kiểm thử tự động song song với dev.

## 2. Khó khăn khi tester viết kiểm thử song song với dev

- **Thiếu thông tin đầy đủ về yêu cầu:** Nếu yêu cầu hoặc thiết kế hệ thống chưa hoàn chỉnh hoặc có sự thay đổi trong quá trình phát triển, tester có thể viết test case không chính xác hoặc thiếu sót. Điều này có thể dẫn đến kiểm thử không phản ánh đúng tính năng thực tế của sản phẩm.

- **Tăng khối lượng công việc cho tester**: Việc tester phải làm việc song song với dev có thể dẫn đến khối lượng công việc tăng lên, đặc biệt khi có nhiều thay đổi hoặc yêu cầu không rõ ràng. Điều này có thể khiến tester cảm thấy bị áp lực và giảm hiệu quả công việc.

- **Khó đồng bộ giữa dev và tester**: Nếu dev và tester không thường xuyên giao tiếp và phối hợp chặt chẽ, có thể dẫn đến sự không đồng nhất trong việc hiểu yêu cầu và cách thức thực hiện kiểm thử. Điều này có thể gây ra việc kiểm thử không đầy đủ hoặc không đúng với yêu cầu thực tế.

## 3. Dev nên viết kiểm thử vào lúc nào?

- **Ngay từ đầu**: Viết kiểm thử trước khi viết mã theo phương pháp Test-Driven Development (TDD).
- **Sau khi hoàn thành một phần mã nguồn**: Viết kiểm thử để xác minh tính năng hoạt động như mong đợi.
- **Khi sửa lỗi (Regression Testing)**: Viết bài kiểm thử để kiểm tra lỗi đã được khắc phục mà không gây lỗi mới.
- **Trước khi đẩy mã lên môi trường staging hoặc production**: Đảm bảo kiểm thử thành công trước khi triển khai.
- **Trong quá trình refactor mã nguồn**: Chạy lại các bài kiểm thử để đảm bảo các thay đổi không làm hỏng chức năng cũ.

## 4. Khó khăn khi Dev viết kiểm thử song song với việc phát triển mã nguồn

- **Thiếu thông tin đầy đủ**: Kiểm thử có thể không phản ánh đúng yêu cầu hoặc thay đổi liên tục.
- **Khó kiểm soát chất lượng mã nguồn**: Việc chỉ viết kiểm thử "đủ" có thể không bao quát tất cả tình huống.
- **Tăng khối lượng công việc**: Dev phải đảm nhận cả việc viết mã và kiểm thử cùng lúc.
- **Kiểm thử không phản ánh đúng hành vi thực tế**: Viết kiểm thử theo thiên hướng của dev.
- **Khó phát hiện các lỗi tổng thể**: Kiểm thử có thể không bao quát các tình huống tích hợp giữa các phần của hệ thống.
- **Không đủ thời gian để phát triển kiểm thử tự động**: Viết kiểm thử thủ công thay vì kiểm thử tự động có thể làm giảm hiệu quả.
- **Sự phức tạp khi sửa mã nguồn**: Phải cập nhật kiểm thử mỗi khi mã nguồn thay đổi.
