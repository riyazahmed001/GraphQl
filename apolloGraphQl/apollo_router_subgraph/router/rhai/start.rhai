// You don't need to define all of these hooks! Just define
// whichever ones your customization needs.
import "super_graph_service" as super_graph_service;
import "execution_service" as execution_service;
import "subgraph_service" as subgraph_service;

fn process_super_graph_request(request) {
  super_graph_service::process_request(request)
}
fn process_super_graph_response(response) {
    super_graph_service::process_response(response)
}

fn supergraph_service(service) {
  // Rhai convention for creating a function pointer
  const request_callback = Fn("process_super_graph_request");
  const response_callback = Fn("process_super_graph_request");

  service.map_request(request_callback);
  service.map_response(response_callback);
}

fn process_execution_service_request(request) {
  execution_service::process_request(request)
}
fn process_execution_service_response(response) {
    execution_service::process_response(response)
}

fn execution_service(service) {

    const request_callback = Fn("process_execution_service_request");
    const response_callback = Fn("process_execution_service_response");

    service.map_request(request_callback);
    service.map_response(response_callback);
}

fn process_subgraph_service_request(request) {
  subgraph_service::process_request(request)
}
fn process_subgraph_service_response(response) {
    subgraph_service::process_response(response)
}

// Passed an additional `subgraph` parameter that indicates the subgraph's name
fn subgraph_service(service, subgraph) {
    const request_callback = Fn("process_subgraph_service_request");
    const response_callback = Fn("process_subgraph_service_response");

    service.map_request(request_callback);
    service.map_response(response_callback);
}