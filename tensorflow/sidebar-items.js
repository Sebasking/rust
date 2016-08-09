initSidebarItems({"enum":[["Code","Error values that can be returned."],["DataType","Type of a single tensor element."]],"mod":[["expr","This module builds computation graphs."]],"struct":[["Buffer","Fixed-length heap-allocated vector. This is basically a `Box<[T]>`, except that that type can't actually be constructed. Furthermore, `[T; N]` can't be constructed if N is not a compile-time constant."],["Library","Dynamically loaded plugins. The C API doesn't provide a way to unload libraries, so nothing happens when this goes out of scope."],["QInt16",""],["QInt32",""],["QInt8",""],["QUInt16",""],["QUInt8",""],["Session","Manages a single graph and execution."],["SessionOptions","Options that can be passed during session creation."],["Status","Holds error information.  It either has an OK code, or else an error code with an associated error message."],["Step","Manages the inputs and outputs for a single execution of a graph."],["Tensor","Holds a multi-dimensional array of elements of a single data type."]],"trait":[["TensorType","A Rust type that maps to a `DataType`."]],"type":[["Result","Convenience type for `Result` with `Status` as the error type."]]});